import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-retro-server');
}

export default function CalmeraOt13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-retro-server" />;
}
