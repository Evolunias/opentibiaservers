import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-login');
}

export default function PopularEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-login" />;
}
