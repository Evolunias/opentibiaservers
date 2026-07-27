import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-uk');
}

export default function ElderaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-uk" />;
}
