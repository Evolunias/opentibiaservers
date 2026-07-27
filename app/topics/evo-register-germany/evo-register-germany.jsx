import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-germany');
}

export default function EvoRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-register-germany" />;
}
