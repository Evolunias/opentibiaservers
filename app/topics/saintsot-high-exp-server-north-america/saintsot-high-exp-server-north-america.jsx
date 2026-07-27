import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-north-america');
}

export default function SaintsotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-north-america" />;
}
