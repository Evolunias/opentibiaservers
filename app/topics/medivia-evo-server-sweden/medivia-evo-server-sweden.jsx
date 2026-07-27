import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-sweden');
}

export default function MediviaEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-sweden" />;
}
