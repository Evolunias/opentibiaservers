import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-poland');
}

export default function SeasonalClientPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-poland" />;
}
