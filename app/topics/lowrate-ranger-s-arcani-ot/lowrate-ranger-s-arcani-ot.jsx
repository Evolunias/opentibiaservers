import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-ot');
}

export default function LowrateRangerSArcaniOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-ot" />;
}
