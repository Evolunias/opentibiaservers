import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-register-poland');
}

export default function EvoRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-register-poland" />;
}
