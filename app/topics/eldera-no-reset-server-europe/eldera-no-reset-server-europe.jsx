import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-europe');
}

export default function ElderaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-europe" />;
}
