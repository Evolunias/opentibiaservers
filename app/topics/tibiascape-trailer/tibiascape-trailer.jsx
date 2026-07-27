import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-trailer');
}

export default function TibiascapeTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-trailer" />;
}
