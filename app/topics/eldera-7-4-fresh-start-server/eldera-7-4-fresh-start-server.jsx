import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-4-fresh-start-server');
}

export default function Eldera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-4-fresh-start-server" />;
}
