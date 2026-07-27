import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-latin-america');
}

export default function SaintsotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-latin-america" />;
}
