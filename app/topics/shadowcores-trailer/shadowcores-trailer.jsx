import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-trailer');
}

export default function ShadowcoresTrailerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-trailer" />;
}
