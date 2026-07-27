import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-no-reset-server-sweden');
}

export default function NtoStarNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-no-reset-server-sweden" />;
}
