import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-seasonal-server');
}

export default function Eldera86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-seasonal-server" />;
}
