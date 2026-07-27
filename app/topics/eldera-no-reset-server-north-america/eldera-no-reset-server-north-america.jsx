import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-north-america');
}

export default function ElderaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-north-america" />;
}
