import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-europe');
}

export default function SaintsotFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-europe" />;
}
