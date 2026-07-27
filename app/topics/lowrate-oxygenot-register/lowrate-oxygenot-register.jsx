import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-register');
}

export default function LowrateOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-register" />;
}
