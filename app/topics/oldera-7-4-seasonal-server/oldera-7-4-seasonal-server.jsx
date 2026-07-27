import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-7-4-seasonal-server');
}

export default function Oldera74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-7-4-seasonal-server" />;
}
