import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fresh-start-server-north-america');
}

export default function ElderaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-fresh-start-server-north-america" />;
}
