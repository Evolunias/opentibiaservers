import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-poland');
}

export default function SaintsotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-poland" />;
}
