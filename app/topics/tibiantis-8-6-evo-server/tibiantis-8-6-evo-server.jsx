import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-6-evo-server');
}

export default function Tibiantis86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-6-evo-server" />;
}
