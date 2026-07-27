import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-login');
}

export default function CurrentEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-login" />;
}
