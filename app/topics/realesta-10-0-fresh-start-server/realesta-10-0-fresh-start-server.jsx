import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-fresh-start-server');
}

export default function Realesta100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-fresh-start-server" />;
}
