import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-mexico');
}

export default function SaintsotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-mexico" />;
}
