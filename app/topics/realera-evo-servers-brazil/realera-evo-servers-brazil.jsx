import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-servers-brazil');
}

export default function RealeraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-servers-brazil" />;
}
