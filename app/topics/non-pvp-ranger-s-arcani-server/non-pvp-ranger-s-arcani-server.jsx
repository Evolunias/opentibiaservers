import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ranger-s-arcani-server');
}

export default function NonPvpRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ranger-s-arcani-server" />;
}
