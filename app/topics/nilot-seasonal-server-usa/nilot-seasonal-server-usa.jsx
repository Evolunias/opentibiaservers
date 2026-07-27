import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-usa');
}

export default function NilotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-usa" />;
}
