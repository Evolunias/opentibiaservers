import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-client');
}

export default function NewSeasonNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-client" />;
}
