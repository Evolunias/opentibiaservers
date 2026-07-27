import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-mexico');
}

export default function SaintsotPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-mexico" />;
}
