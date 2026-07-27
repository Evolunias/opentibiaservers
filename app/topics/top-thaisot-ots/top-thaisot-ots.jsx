import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-ots');
}

export default function TopThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-ots" />;
}
