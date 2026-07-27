import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oxygenot-register');
}

export default function BestOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-oxygenot-register" />;
}
