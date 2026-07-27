import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-server-sweden');
}

export default function LumineraEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-server-sweden" />;
}
