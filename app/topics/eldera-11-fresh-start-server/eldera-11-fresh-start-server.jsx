import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-fresh-start-server');
}

export default function Eldera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-fresh-start-server" />;
}
