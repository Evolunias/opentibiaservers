import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-trailer');
}

export default function TibiantisTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-trailer" />;
}
