import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolera-login');
}

export default function CustomEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-evolera-login" />;
}
