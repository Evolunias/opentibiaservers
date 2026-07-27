import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-trailer');
}

export default function OlderaTrailerKeywordPage() {
  return <StaticKeywordPage slug="oldera-trailer" />;
}
