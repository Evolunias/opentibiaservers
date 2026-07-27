import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-private-server');
}

export default function FreshStartArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-private-server" />;
}
