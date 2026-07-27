import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-no-reset-server-sweden');
}

export default function TibijkaNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-no-reset-server-sweden" />;
}
