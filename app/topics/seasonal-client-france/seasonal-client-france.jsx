import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-france');
}

export default function SeasonalClientFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-france" />;
}
