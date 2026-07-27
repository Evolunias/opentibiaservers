import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-private-server');
}

export default function LowrateArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-private-server" />;
}
