import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-9-6-retro-server');
}

export default function CalmeraOt96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-9-6-retro-server" />;
}
