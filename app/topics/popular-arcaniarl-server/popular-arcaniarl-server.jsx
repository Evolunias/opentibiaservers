import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-server');
}

export default function PopularArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-server" />;
}
