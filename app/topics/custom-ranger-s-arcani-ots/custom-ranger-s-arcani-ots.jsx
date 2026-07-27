import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-ots');
}

export default function CustomRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-ots" />;
}
