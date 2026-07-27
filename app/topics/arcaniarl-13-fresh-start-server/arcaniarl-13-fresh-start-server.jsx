import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-13-fresh-start-server');
}

export default function Arcaniarl13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-13-fresh-start-server" />;
}
