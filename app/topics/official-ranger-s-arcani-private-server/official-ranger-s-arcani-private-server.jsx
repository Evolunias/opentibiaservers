import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-private-server');
}

export default function OfficialRangerSArcaniPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-private-server" />;
}
