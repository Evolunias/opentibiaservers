import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-canada');
}

export default function SaintsotHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-canada" />;
}
