import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-15-fresh-start-server');
}

export default function Eldera15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-15-fresh-start-server" />;
}
