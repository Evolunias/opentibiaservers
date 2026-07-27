import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-europe');
}

export default function SaintsotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-europe" />;
}
