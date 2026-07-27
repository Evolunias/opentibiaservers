import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-germany');
}

export default function TibiantisEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-germany" />;
}
