import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-canada');
}

export default function ElderaFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-canada" />;
}
