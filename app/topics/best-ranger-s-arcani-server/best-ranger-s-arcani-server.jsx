import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-server');
}

export default function BestRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-server" />;
}
