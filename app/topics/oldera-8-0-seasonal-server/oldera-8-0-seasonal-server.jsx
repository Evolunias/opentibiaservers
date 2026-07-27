import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-0-seasonal-server');
}

export default function Oldera80SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-0-seasonal-server" />;
}
