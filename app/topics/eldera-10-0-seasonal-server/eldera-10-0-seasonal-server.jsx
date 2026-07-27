import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-0-seasonal-server');
}

export default function Eldera100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-0-seasonal-server" />;
}
