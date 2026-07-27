import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibiantis-servers');
}

export default function EvoTibiantisServersKeywordPage() {
  return <StaticKeywordPage slug="evo-tibiantis-servers" />;
}
