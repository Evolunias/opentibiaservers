import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-france');
}

export default function SaintsotFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-france" />;
}
