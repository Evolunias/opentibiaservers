import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-72-seasonal-server');
}

export default function Eldera772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-72-seasonal-server" />;
}
