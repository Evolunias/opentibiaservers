import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-trailer');
}

export default function TibijkaTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-trailer" />;
}
