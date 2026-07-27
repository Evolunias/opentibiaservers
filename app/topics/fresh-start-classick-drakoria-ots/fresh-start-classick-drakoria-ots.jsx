import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-ots');
}

export default function FreshStartClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-ots" />;
}
