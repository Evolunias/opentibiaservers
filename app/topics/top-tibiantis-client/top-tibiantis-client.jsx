import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-client');
}

export default function TopTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-client" />;
}
