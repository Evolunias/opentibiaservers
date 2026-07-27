import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-register');
}

export default function TopRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-register" />;
}
