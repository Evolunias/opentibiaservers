import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-seasonal-server-france');
}

export default function NilotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-seasonal-server-france" />;
}
