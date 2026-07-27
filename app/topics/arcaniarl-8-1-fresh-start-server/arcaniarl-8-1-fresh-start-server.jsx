import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-fresh-start-server');
}

export default function Arcaniarl81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-fresh-start-server" />;
}
