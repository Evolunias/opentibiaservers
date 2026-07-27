import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-latin-america');
}

export default function NilotSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-latin-america" />;
}
