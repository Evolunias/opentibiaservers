import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-private-server');
}

export default function CustomArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-private-server" />;
}
