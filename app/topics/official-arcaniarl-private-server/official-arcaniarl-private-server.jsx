import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-private-server');
}

export default function OfficialArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-private-server" />;
}
