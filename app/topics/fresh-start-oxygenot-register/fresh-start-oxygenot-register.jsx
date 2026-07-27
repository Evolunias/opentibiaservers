import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-register');
}

export default function FreshStartOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-register" />;
}
