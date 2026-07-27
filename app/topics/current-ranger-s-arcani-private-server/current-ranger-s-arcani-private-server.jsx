import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-private-server');
}

export default function CurrentRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-private-server" />;
}
