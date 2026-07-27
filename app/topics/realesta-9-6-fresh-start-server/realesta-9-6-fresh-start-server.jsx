import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-fresh-start-server');
}

export default function Realesta96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-fresh-start-server" />;
}
