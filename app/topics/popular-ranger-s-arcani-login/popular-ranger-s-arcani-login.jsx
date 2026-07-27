import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-login');
}

export default function PopularRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-login" />;
}
