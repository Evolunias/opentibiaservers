import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-6-fresh-start-server');
}

export default function Arcaniarl76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-6-fresh-start-server" />;
}
