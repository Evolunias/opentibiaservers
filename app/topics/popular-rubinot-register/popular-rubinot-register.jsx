import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-register');
}

export default function PopularRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-register" />;
}
