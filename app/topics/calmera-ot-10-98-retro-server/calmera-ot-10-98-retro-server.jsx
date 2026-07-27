import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-retro-server');
}

export default function CalmeraOt1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-retro-server" />;
}
