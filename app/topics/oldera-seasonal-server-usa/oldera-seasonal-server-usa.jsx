import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-usa');
}

export default function OlderaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-usa" />;
}
