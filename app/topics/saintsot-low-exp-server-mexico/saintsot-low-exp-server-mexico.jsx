import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-mexico');
}

export default function SaintsotLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-mexico" />;
}
