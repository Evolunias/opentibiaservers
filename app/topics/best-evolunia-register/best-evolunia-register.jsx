import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-register');
}

export default function BestEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-register" />;
}
