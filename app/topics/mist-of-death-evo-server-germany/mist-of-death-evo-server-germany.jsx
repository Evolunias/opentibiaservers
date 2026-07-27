import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-germany');
}

export default function MistOfDeathEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-germany" />;
}
