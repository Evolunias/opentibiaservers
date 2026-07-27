import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-register');
}

export default function LowrateRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-register" />;
}
