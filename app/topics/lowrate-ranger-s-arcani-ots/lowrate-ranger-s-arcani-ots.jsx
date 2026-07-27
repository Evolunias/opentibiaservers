import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-ots');
}

export default function LowrateRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-ots" />;
}
