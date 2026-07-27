import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-fresh-start-server');
}

export default function Realesta76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-fresh-start-server" />;
}
