import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-sweden');
}

export default function RealeraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-sweden" />;
}
