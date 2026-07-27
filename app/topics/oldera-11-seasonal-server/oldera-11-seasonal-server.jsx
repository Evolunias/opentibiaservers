import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-seasonal-server');
}

export default function Oldera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-seasonal-server" />;
}
