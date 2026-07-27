import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-ot-server');
}

export default function PopularRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-ot-server" />;
}
