import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-evo-server');
}

export default function Tibiantis76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-evo-server" />;
}
