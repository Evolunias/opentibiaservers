import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-uk');
}

export default function SaintsotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-uk" />;
}
