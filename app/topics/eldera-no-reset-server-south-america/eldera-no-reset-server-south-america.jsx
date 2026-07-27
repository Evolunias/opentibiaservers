import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-no-reset-server-south-america');
}

export default function ElderaNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-no-reset-server-south-america" />;
}
