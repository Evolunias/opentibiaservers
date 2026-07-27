import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-trailer');
}

export default function SaintsotTrailerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-trailer" />;
}
