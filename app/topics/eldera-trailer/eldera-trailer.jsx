import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-trailer');
}

export default function ElderaTrailerKeywordPage() {
  return <StaticKeywordPage slug="eldera-trailer" />;
}
