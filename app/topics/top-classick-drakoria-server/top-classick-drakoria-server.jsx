import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-server');
}

export default function TopClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-server" />;
}
