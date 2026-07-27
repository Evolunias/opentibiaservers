import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-11-fresh-start-server');
}

export default function Arcaniarl11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-11-fresh-start-server" />;
}
