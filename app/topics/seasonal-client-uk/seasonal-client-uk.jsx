import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-uk');
}

export default function SeasonalClientUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-uk" />;
}
