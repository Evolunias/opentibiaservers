import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-rubinot-register');
}

export default function CustomRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-rubinot-register" />;
}
