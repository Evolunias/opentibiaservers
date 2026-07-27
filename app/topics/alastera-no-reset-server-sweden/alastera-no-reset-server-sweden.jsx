import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-sweden');
}

export default function AlasteraNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-sweden" />;
}
