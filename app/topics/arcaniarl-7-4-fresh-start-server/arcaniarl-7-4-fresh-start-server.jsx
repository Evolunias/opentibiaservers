import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-4-fresh-start-server');
}

export default function Arcaniarl74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-4-fresh-start-server" />;
}
