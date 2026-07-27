import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-seasonal-server');
}

export default function Eldera1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-seasonal-server" />;
}
