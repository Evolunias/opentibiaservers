import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-no-reset-server-sweden');
}

export default function NepreniaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-no-reset-server-sweden" />;
}
