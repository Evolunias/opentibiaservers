import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-register');
}

export default function RubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="rubinot-register" />;
}
