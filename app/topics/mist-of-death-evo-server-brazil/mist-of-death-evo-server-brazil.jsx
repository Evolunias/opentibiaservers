import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-brazil');
}

export default function MistOfDeathEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-brazil" />;
}
