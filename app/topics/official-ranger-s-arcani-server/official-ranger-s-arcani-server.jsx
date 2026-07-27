import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-server');
}

export default function OfficialRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-server" />;
}
