import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-server');
}

export default function BestEvoluniaServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-server" />;
}
