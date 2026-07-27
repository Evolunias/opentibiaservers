import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-sweden');
}

export default function OriginaltibiaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-sweden" />;
}
