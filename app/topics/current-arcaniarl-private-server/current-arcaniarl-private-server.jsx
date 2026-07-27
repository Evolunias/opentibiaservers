import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-private-server');
}

export default function CurrentArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-private-server" />;
}
