import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-server');
}

export default function PopularEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-server" />;
}
