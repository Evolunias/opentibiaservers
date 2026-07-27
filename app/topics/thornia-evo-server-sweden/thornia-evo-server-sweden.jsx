import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-server-sweden');
}

export default function ThorniaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-server-sweden" />;
}
