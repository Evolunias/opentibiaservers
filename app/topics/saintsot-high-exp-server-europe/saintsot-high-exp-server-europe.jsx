import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-europe');
}

export default function SaintsotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-europe" />;
}
