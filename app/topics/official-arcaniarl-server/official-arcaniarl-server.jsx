import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-server');
}

export default function OfficialArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-server" />;
}
