import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-usa');
}

export default function ElderaNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-usa" />;
}
