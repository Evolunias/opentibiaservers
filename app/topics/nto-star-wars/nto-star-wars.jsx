import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-wars');
}

export default function NtoStarWarsKeywordPage() {
  return <StaticKeywordPage slug="nto-star-wars" />;
}
