import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-sweden');
}

export default function TibiaraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-sweden" />;
}
