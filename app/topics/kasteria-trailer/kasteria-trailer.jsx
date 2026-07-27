import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-trailer');
}

export default function KasteriaTrailerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-trailer" />;
}
