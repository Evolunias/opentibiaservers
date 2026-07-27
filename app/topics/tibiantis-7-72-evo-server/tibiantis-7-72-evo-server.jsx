import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-evo-server');
}

export default function Tibiantis772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-evo-server" />;
}
