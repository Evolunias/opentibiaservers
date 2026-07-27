import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-france');
}

export default function SaintsotHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-france" />;
}
