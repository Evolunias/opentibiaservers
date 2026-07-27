import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-servers-usa');
}

export default function OxygenotEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-servers-usa" />;
}
