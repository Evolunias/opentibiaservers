import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-trailer');
}

export default function UnlineTrailerKeywordPage() {
  return <StaticKeywordPage slug="unline-trailer" />;
}
