import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-register');
}

export default function TopOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-register" />;
}
