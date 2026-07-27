import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-server');
}

export default function BestClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-server" />;
}
