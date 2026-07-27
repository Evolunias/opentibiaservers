import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-private-server');
}

export default function TopArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-private-server" />;
}
