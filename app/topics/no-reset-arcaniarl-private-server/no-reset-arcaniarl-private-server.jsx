import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-private-server');
}

export default function NoResetArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-private-server" />;
}
