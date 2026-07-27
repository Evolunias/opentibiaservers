import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-seasonal-server-sweden');
}

export default function ImperianicSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="imperianic-seasonal-server-sweden" />;
}
