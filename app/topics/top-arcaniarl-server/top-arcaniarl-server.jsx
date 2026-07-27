import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-server');
}

export default function TopArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-server" />;
}
