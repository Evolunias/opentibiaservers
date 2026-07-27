import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-bosses');
}

export default function SaintsotBossesKeywordPage() {
  return <StaticKeywordPage slug="saintsot-bosses" />;
}
