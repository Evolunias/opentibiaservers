import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-usa');
}

export default function SaintsotFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-usa" />;
}
