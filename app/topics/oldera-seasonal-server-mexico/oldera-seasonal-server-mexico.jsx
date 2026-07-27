import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-mexico');
}

export default function OlderaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-mexico" />;
}
