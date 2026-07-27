import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-trailer');
}

export default function EvoleraTrailerKeywordPage() {
  return <StaticKeywordPage slug="evolera-trailer" />;
}
