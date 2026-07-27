import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-client');
}

export default function NewSeasonAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-client" />;
}
