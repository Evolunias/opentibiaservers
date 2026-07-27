import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-rubinot-register');
}

export default function OfficialRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="official-rubinot-register" />;
}
