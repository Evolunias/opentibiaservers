import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-ots');
}

export default function CurrentRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-ots" />;
}
