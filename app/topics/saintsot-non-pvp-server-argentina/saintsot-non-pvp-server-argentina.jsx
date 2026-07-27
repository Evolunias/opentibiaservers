import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-non-pvp-server-argentina');
}

export default function SaintsotNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-non-pvp-server-argentina" />;
}
