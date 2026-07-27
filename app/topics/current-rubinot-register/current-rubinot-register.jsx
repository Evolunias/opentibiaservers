import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-register');
}

export default function CurrentRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-register" />;
}
