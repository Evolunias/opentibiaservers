import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-argentina');
}

export default function ElderaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-argentina" />;
}
