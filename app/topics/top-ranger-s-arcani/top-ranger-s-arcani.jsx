import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani');
}

export default function TopRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani" />;
}
