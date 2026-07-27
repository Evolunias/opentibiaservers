import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-15-seasonal-server');
}

export default function Oldera15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-15-seasonal-server" />;
}
