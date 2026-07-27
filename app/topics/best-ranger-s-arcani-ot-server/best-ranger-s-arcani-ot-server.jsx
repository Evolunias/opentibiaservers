import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-ot-server');
}

export default function BestRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-ot-server" />;
}
