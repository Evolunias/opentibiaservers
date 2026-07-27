import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-non-pvp-server');
}

export default function Saintsot11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-non-pvp-server" />;
}
