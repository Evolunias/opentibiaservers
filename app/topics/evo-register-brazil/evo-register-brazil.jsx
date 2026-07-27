import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-brazil');
}

export default function EvoRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-register-brazil" />;
}
