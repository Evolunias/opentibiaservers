import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-evo-server');
}

export default function Tibiantis84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-evo-server" />;
}
