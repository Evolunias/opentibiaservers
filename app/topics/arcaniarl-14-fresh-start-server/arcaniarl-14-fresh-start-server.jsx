import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-14-fresh-start-server');
}

export default function Arcaniarl14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-14-fresh-start-server" />;
}
