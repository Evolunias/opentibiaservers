import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-germany');
}

export default function SaintsotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-germany" />;
}
