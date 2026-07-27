import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-client');
}

export default function FreshStartClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-client" />;
}
