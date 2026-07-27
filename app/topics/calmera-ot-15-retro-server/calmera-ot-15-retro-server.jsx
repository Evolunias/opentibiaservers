import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-15-retro-server');
}

export default function CalmeraOt15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-15-retro-server" />;
}
