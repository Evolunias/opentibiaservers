import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-evo-server');
}

export default function Tibiantis71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-evo-server" />;
}
