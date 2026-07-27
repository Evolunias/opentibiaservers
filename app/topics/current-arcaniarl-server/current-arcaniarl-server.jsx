import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-server');
}

export default function CurrentArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-server" />;
}
