import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-neprenia-server');
}

export default function SeasonalNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-neprenia-server" />;
}
