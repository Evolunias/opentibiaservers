import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-6-fresh-start-server');
}

export default function Arcaniarl86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-6-fresh-start-server" />;
}
