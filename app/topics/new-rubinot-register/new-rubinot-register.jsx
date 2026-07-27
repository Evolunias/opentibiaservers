import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-register');
}

export default function NewRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-register" />;
}
