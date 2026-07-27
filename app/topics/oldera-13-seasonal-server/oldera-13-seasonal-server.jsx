import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-13-seasonal-server');
}

export default function Oldera13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-13-seasonal-server" />;
}
