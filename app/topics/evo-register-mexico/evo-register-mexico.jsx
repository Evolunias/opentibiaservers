import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-mexico');
}

export default function EvoRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-register-mexico" />;
}
