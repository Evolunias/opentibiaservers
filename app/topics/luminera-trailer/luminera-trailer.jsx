import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-trailer');
}

export default function LumineraTrailerKeywordPage() {
  return <StaticKeywordPage slug="luminera-trailer" />;
}
