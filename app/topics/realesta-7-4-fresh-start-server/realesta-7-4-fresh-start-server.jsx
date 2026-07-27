import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-fresh-start-server');
}

export default function Realesta74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-fresh-start-server" />;
}
