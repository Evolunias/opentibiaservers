import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolera-login');
}

export default function ActiveEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-evolera-login" />;
}
