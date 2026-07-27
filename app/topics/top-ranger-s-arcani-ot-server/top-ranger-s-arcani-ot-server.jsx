import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-ot-server');
}

export default function TopRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-ot-server" />;
}
