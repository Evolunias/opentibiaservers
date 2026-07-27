import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-fun-server');
}

export default function ElderaFunServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-fun-server" />;
}
