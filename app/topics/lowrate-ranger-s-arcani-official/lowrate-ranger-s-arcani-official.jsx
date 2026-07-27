import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-official');
}

export default function LowrateRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-official" />;
}
