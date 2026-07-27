import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-login');
}

export default function TopEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-login" />;
}
