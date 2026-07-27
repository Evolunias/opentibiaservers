import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-seasonal-server');
}

export default function Eldera11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-seasonal-server" />;
}
