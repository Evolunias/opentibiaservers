import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-ots');
}

export default function FreshStartEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-ots" />;
}
