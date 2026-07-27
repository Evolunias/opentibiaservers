import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-server');
}

export default function LowrateRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-server" />;
}
