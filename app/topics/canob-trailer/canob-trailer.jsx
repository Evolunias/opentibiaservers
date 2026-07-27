import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-trailer');
}

export default function CanobTrailerKeywordPage() {
  return <StaticKeywordPage slug="canob-trailer" />;
}
