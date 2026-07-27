import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-evo-servers');
}

export default function Tibiantis12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-evo-servers" />;
}
