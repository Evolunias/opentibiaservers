import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-login');
}

export default function EvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="evolera-login" />;
}
