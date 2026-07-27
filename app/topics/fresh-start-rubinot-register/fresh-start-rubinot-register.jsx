import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot-register');
}

export default function FreshStartRubinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot-register" />;
}
