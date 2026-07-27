import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-ots');
}

export default function FreshStartUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-ots" />;
}
