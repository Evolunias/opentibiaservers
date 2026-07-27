import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-evo-server');
}

export default function Tibiantis11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-evo-server" />;
}
