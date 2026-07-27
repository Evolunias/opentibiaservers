import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-oxygenot-register');
}

export default function ActiveOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-oxygenot-register" />;
}
