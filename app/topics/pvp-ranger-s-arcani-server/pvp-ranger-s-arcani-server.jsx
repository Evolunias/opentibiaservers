import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-ranger-s-arcani-server');
}

export default function PvpRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-ranger-s-arcani-server" />;
}
