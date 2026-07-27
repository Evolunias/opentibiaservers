import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-canada');
}

export default function NilotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-canada" />;
}
