import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-server');
}

export default function FreshStartArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-server" />;
}
