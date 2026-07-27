import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-canada');
}

export default function ElderaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-canada" />;
}
