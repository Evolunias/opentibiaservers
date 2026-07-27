import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-ots');
}

export default function PopularEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-ots" />;
}
