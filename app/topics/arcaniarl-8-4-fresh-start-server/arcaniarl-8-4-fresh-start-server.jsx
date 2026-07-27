import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-4-fresh-start-server');
}

export default function Arcaniarl84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-4-fresh-start-server" />;
}
