import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-private-server');
}

export default function ActiveArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-private-server" />;
}
