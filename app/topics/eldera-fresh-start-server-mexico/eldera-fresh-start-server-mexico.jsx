import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-mexico');
}

export default function ElderaFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-mexico" />;
}
