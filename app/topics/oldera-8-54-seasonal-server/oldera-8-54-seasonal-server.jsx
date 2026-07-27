import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-54-seasonal-server');
}

export default function Oldera854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-54-seasonal-server" />;
}
