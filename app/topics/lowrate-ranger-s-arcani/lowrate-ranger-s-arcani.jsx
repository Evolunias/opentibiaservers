import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani');
}

export default function LowrateRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani" />;
}
