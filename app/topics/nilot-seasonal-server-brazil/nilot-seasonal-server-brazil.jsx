import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-brazil');
}

export default function NilotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-brazil" />;
}
