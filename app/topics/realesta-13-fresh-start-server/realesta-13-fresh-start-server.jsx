import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-13-fresh-start-server');
}

export default function Realesta13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-13-fresh-start-server" />;
}
