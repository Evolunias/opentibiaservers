import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-seasonal-server');
}

export default function Eldera854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-seasonal-server" />;
}
