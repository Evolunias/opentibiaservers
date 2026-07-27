import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-canada-server');
}

export default function CalmeraOtCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-canada-server" />;
}
