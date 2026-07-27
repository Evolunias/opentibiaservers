import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-ot-server');
}

export default function LowrateRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-ot-server" />;
}
