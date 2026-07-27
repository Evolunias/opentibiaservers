import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-south-america');
}

export default function ImperianicSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-south-america" />;
}
