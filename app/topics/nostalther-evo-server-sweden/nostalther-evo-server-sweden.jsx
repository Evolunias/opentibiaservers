import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-evo-server-sweden');
}

export default function NostaltherEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="nostalther-evo-server-sweden" />;
}
