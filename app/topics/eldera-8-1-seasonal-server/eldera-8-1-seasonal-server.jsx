import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-1-seasonal-server');
}

export default function Eldera81SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-1-seasonal-server" />;
}
