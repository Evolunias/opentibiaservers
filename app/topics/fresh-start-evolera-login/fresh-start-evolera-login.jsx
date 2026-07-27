import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-login');
}

export default function FreshStartEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-login" />;
}
