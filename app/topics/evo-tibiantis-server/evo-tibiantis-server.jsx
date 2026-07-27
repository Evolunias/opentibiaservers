import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiantis-server');
}

export default function EvoTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiantis-server" />;
}
