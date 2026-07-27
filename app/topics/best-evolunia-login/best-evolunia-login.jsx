import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-login');
}

export default function BestEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-login" />;
}
