import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-9-6-seasonal-server');
}

export default function Oldera96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-9-6-seasonal-server" />;
}
