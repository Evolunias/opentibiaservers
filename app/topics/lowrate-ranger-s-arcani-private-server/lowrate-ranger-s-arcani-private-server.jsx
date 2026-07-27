import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-private-server');
}

export default function LowrateRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-private-server" />;
}
