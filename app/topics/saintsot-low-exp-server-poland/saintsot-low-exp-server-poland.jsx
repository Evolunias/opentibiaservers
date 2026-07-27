import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-poland');
}

export default function SaintsotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-poland" />;
}
