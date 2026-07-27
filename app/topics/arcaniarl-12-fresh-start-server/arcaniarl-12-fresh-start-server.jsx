import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-12-fresh-start-server');
}

export default function Arcaniarl12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-12-fresh-start-server" />;
}
