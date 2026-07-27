import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-latin-america');
}

export default function SaintsotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-latin-america" />;
}
