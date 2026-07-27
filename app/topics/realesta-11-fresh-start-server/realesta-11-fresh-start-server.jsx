import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-fresh-start-server');
}

export default function Realesta11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-fresh-start-server" />;
}
