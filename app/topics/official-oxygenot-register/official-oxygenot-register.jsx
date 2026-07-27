import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oxygenot-register');
}

export default function OfficialOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-oxygenot-register" />;
}
