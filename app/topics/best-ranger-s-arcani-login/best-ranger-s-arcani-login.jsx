import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-login');
}

export default function BestRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-login" />;
}
