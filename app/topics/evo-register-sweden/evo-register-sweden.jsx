import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-sweden');
}

export default function EvoRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-register-sweden" />;
}
