import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-uk');
}

export default function EvoRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="evo-register-uk" />;
}
