import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-mexico');
}

export default function SaintsotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-mexico" />;
}
