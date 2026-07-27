import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-argentina');
}

export default function SaintsotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-argentina" />;
}
