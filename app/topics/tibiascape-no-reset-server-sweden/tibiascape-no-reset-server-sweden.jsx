import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-sweden');
}

export default function TibiascapeNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-sweden" />;
}
