import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-trailer');
}

export default function RealeraTrailerKeywordPage() {
  return <StaticKeywordPage slug="realera-trailer" />;
}
