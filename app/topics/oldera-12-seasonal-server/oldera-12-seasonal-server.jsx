import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-12-seasonal-server');
}

export default function Oldera12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-12-seasonal-server" />;
}
