import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-6-seasonal-server');
}

export default function Oldera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-6-seasonal-server" />;
}
