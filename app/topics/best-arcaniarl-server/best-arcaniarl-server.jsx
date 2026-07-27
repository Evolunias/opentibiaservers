import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-server');
}

export default function BestArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-server" />;
}
