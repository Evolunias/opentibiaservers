import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-ots');
}

export default function PopularClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-ots" />;
}
