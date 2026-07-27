import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-europe');
}

export default function NilotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-europe" />;
}
