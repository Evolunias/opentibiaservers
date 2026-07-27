import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-sweden');
}

export default function MistOfDeathEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-sweden" />;
}
