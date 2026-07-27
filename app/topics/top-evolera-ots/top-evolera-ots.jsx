import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-ots');
}

export default function TopEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-ots" />;
}
