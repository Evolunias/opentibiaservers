import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-north-america');
}

export default function SaintsotLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-north-america" />;
}
