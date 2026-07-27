import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-north-america');
}

export default function NilotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-north-america" />;
}
