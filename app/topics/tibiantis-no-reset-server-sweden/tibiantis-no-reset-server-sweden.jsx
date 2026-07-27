import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-sweden');
}

export default function TibiantisNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-sweden" />;
}
