import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-evo-server');
}

export default function Tibiantis14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-evo-server" />;
}
