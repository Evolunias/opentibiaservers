import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-client');
}

export default function PopularEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-client" />;
}
