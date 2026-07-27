import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-server');
}

export default function FreshStartClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-server" />;
}
