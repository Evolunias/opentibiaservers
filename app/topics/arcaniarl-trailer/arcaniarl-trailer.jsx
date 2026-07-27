import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-trailer');
}

export default function ArcaniarlTrailerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-trailer" />;
}
