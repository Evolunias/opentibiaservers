import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-germany');
}

export default function ImperianicEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-germany" />;
}
