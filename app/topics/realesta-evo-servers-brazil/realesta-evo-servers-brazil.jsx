import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-servers-brazil');
}

export default function RealestaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-servers-brazil" />;
}
