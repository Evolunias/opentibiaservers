import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-register');
}

export default function NewOxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-register" />;
}
