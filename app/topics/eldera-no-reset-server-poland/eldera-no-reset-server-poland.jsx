import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-poland');
}

export default function ElderaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-poland" />;
}
