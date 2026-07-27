import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-client-sweden');
}

export default function EvoClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-client-sweden" />;
}
