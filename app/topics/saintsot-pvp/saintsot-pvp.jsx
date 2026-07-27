import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp');
}

export default function SaintsotPvpKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp" />;
}
