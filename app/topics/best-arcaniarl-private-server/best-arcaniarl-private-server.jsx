import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-private-server');
}

export default function BestArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-private-server" />;
}
