import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-trailer');
}

export default function NtoStarTrailerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-trailer" />;
}
