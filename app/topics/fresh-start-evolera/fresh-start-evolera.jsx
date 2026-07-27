import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera');
}

export default function FreshStartEvoleraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera" />;
}
