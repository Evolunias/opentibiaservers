import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-private-server');
}

export default function PopularArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-private-server" />;
}
