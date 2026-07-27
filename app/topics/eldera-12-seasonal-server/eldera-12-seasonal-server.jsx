import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-seasonal-server');
}

export default function Eldera12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-seasonal-server" />;
}
