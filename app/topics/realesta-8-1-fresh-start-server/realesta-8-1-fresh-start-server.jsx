import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-1-fresh-start-server');
}

export default function Realesta81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-1-fresh-start-server" />;
}
