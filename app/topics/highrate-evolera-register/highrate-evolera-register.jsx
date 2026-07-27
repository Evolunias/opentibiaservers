import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-register');
}

export default function HighrateEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-register" />;
}
