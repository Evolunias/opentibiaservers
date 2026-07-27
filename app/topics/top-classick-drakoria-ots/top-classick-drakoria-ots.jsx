import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-ots');
}

export default function TopClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-ots" />;
}
