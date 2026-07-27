import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-south-america');
}

export default function ElderaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-south-america" />;
}
