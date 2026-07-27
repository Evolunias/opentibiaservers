import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-arcaniarl-server');
}

export default function NonPvpArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-arcaniarl-server" />;
}
