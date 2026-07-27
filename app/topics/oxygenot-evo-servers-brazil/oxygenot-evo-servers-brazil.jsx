import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-servers-brazil');
}

export default function OxygenotEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-servers-brazil" />;
}
