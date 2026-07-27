import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-12-fresh-start-server');
}

export default function Eldera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-12-fresh-start-server" />;
}
