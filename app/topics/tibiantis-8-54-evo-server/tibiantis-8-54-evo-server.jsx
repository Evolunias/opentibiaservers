import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-54-evo-server');
}

export default function Tibiantis854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-54-evo-server" />;
}
