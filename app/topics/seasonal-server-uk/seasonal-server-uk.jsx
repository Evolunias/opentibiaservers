import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-server-uk');
}

export default function SeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-server-uk" />;
}
