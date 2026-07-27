import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-germany');
}

export default function SaintsotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-germany" />;
}
