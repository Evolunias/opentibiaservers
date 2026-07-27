import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-register');
}

export default function EvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="evolunia-register" />;
}
