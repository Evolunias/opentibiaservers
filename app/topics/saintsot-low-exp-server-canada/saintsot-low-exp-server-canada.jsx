import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-canada');
}

export default function SaintsotLowExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-canada" />;
}
