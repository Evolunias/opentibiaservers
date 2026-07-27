import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-europe');
}

export default function ElderaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-europe" />;
}
