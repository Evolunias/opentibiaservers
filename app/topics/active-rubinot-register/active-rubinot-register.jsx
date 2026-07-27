import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-rubinot-register');
}

export default function ActiveRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-rubinot-register" />;
}
