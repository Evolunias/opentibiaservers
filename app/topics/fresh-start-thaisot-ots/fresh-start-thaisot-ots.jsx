import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-ots');
}

export default function FreshStartThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-ots" />;
}
