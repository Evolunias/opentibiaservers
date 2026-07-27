import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-sweden');
}

export default function TibianusEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-sweden" />;
}
