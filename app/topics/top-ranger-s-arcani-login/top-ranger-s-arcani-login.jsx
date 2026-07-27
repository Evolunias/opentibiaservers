import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-login');
}

export default function TopRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-login" />;
}
