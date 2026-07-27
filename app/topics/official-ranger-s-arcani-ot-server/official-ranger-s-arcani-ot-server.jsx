import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-ot-server');
}

export default function OfficialRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-ot-server" />;
}
