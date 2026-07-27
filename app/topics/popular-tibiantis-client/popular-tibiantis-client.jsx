import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-client');
}

export default function PopularTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-client" />;
}
