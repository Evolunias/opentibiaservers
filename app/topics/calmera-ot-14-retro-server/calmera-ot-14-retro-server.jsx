import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-retro-server');
}

export default function CalmeraOt14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-retro-server" />;
}
