import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-fresh-start-server');
}

export default function Realesta14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-fresh-start-server" />;
}
