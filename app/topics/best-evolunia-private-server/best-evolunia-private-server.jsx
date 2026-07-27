import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-private-server');
}

export default function BestEvoluniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-private-server" />;
}
