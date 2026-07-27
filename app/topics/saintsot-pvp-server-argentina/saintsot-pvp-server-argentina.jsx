import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-argentina');
}

export default function SaintsotPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-argentina" />;
}
