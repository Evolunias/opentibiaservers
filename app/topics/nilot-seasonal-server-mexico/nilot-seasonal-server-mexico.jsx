import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-mexico');
}

export default function NilotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-mexico" />;
}
