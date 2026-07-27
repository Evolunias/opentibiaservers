import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-mexico');
}

export default function ElderaNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-mexico" />;
}
