import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-evo-server');
}

export default function Tibiantis12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-evo-server" />;
}
