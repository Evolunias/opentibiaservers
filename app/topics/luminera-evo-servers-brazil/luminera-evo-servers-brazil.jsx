import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-evo-servers-brazil');
}

export default function LumineraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-evo-servers-brazil" />;
}
