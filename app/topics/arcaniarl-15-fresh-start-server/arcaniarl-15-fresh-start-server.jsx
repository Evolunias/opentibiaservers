import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-15-fresh-start-server');
}

export default function Arcaniarl15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-15-fresh-start-server" />;
}
