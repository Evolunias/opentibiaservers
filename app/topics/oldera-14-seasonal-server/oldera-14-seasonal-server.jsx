import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-14-seasonal-server');
}

export default function Oldera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-14-seasonal-server" />;
}
