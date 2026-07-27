import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-server');
}

export default function PopularClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-server" />;
}
