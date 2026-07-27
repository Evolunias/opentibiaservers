import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-uk');
}

export default function SaintsotLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-uk" />;
}
