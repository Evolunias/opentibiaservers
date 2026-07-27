import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-germany');
}

export default function ElderaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-germany" />;
}
