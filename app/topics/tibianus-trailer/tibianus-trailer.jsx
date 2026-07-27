import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-trailer');
}

export default function TibianusTrailerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-trailer" />;
}
