import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-europe');
}

export default function MistOfDeathEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-europe" />;
}
