import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-ot-server');
}

export default function ElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-ot-server" />;
}
