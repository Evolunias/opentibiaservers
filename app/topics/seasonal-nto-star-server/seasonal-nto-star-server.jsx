import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-nto-star-server');
}

export default function SeasonalNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-nto-star-server" />;
}
