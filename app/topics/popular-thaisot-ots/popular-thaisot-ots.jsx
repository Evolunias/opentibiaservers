import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-ots');
}

export default function PopularThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-ots" />;
}
