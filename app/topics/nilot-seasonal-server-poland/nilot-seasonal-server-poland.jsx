import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-poland');
}

export default function NilotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-poland" />;
}
