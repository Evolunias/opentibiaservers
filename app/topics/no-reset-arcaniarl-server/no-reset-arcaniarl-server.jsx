import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-server');
}

export default function NoResetArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-server" />;
}
