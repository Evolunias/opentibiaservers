import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-realesta-server');
}

export default function SeasonalRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-realesta-server" />;
}
