import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-4-retro-server');
}

export default function CalmeraOt74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-4-retro-server" />;
}
