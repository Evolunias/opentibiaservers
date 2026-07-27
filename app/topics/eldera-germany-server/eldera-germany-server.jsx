import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-germany-server');
}

export default function ElderaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-germany-server" />;
}
