import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-evo-server');
}

export default function Tibiantis1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-evo-server" />;
}
