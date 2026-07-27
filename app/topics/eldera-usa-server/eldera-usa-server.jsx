import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-usa-server');
}

export default function ElderaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-usa-server" />;
}
