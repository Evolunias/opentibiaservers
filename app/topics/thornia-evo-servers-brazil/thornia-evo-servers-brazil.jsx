import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-evo-servers-brazil');
}

export default function ThorniaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-evo-servers-brazil" />;
}
