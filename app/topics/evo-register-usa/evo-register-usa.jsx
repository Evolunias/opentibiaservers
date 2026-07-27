import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-usa');
}

export default function EvoRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-register-usa" />;
}
