import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-client');
}

export default function LowrateRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-client" />;
}
