import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-germany');
}

export default function NilotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-germany" />;
}
