import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-register');
}

export default function LowrateNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-register" />;
}
