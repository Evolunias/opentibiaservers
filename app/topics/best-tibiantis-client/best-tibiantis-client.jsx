import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-client');
}

export default function BestTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-client" />;
}
