import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-register');
}

export default function LowrateEvoleraRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-register" />;
}
