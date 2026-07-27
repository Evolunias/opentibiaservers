import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-ranger-s-arcani-server');
}

export default function PvpEnforcedRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-ranger-s-arcani-server" />;
}
