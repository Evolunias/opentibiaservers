import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-sweden');
}

export default function RealeraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-sweden" />;
}
