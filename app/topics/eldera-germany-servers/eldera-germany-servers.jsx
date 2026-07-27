import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-germany-servers');
}

export default function ElderaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-germany-servers" />;
}
