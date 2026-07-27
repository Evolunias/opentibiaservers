import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-europe-server');
}

export default function CalmeraOtEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-europe-server" />;
}
