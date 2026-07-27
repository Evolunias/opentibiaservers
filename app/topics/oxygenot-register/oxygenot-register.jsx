import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-register');
}

export default function OxygenotRegisterKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-register" />;
}
