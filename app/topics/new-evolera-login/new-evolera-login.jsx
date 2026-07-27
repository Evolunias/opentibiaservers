import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolera-login');
}

export default function NewEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-evolera-login" />;
}
