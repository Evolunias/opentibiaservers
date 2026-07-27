import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-europe-servers');
}

export default function CalmeraOtEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-europe-servers" />;
}
