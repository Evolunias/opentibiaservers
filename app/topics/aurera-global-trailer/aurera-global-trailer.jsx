import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-trailer');
}

export default function AureraGlobalTrailerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-trailer" />;
}
