import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-non-pvp-server');
}

export default function Saintsot100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-non-pvp-server" />;
}
