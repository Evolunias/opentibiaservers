import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-evo-server');
}

export default function Tibiantis81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-evo-server" />;
}
