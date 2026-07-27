import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-client');
}

export default function BestEvoluniaClientKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-client" />;
}
