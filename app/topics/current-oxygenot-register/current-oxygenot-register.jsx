import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oxygenot-register');
}

export default function CurrentOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-oxygenot-register" />;
}
