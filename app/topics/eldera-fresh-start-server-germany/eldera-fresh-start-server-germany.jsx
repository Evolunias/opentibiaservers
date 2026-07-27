import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-germany');
}

export default function ElderaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-germany" />;
}
