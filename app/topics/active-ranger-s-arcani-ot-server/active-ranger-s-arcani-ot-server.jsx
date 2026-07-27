import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-ot-server');
}

export default function ActiveRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-ot-server" />;
}
