import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-brazil');
}

export default function ElderaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-brazil" />;
}
