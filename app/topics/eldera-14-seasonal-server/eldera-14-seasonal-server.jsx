import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-seasonal-server');
}

export default function Eldera14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-seasonal-server" />;
}
