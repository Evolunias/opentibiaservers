import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-poland');
}

export default function SaintsotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-poland" />;
}
