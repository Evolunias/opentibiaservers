import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera');
}

export default function PopularEvoleraKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera" />;
}
