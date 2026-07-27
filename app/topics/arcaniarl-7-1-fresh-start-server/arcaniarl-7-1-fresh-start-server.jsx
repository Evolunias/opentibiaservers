import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-7-1-fresh-start-server');
}

export default function Arcaniarl71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-7-1-fresh-start-server" />;
}
