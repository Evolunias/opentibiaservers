import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-register');
}

export default function CustomOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-register" />;
}
