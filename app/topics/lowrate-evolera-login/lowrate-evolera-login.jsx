import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-login');
}

export default function LowrateEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-login" />;
}
