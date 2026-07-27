import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-login');
}

export default function HighrateEvoleraLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-login" />;
}
