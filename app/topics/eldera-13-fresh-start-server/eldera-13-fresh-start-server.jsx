import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-fresh-start-server');
}

export default function Eldera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-fresh-start-server" />;
}
