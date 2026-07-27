import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-uk');
}

export default function ElderaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-uk" />;
}
