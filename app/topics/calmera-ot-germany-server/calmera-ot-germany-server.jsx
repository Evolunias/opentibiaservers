import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-germany-server');
}

export default function CalmeraOtGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-germany-server" />;
}
