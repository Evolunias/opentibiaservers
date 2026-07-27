import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-client');
}

export default function BestRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-client" />;
}
