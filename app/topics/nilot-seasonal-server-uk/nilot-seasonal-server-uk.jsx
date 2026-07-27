import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-uk');
}

export default function NilotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-uk" />;
}
