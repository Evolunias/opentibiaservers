import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-sweden');
}

export default function KasteriaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-sweden" />;
}
