import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-france');
}

export default function ImperianicSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-france" />;
}
