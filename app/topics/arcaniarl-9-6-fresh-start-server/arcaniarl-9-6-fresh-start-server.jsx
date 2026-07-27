import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-fresh-start-server');
}

export default function Arcaniarl96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-fresh-start-server" />;
}
