import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-ots');
}

export default function CurrentClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-ots" />;
}
