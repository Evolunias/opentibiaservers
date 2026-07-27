import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-seasonal-server');
}

export default function Eldera84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-seasonal-server" />;
}
