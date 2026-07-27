import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-seasonal-server');
}

export default function Oldera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-seasonal-server" />;
}
