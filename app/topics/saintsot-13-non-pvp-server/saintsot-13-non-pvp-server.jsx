import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-non-pvp-server');
}

export default function Saintsot13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-non-pvp-server" />;
}
