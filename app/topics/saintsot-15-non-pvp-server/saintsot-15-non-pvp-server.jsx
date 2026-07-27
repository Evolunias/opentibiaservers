import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-non-pvp-server');
}

export default function Saintsot15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-non-pvp-server" />;
}
