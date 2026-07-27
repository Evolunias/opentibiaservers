import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-classick-drakoria-server');
}

export default function SeasonalClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-classick-drakoria-server" />;
}
