import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-usa');
}

export default function OxygenotEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-usa" />;
}
