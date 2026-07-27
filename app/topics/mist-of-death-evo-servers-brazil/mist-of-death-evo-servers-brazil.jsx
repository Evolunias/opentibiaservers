import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-servers-brazil');
}

export default function MistOfDeathEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-servers-brazil" />;
}
