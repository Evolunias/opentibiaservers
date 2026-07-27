import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-private-server');
}

export default function HighrateRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-private-server" />;
}
