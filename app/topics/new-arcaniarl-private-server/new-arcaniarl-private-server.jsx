import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-private-server');
}

export default function NewArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-private-server" />;
}
