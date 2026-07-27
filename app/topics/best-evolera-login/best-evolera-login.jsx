import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-login');
}

export default function BestEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-login" />;
}
