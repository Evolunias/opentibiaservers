import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-private-server');
}

export default function ArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-private-server" />;
}
