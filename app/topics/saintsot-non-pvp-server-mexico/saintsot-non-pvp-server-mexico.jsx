import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-mexico');
}

export default function SaintsotNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-mexico" />;
}
