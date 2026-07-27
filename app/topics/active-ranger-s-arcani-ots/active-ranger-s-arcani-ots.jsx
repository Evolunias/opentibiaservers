import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-ots');
}

export default function ActiveRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-ots" />;
}
