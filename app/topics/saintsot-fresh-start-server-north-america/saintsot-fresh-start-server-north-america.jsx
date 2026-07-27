import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-north-america');
}

export default function SaintsotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-north-america" />;
}
