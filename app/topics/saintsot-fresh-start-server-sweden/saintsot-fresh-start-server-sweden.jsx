import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-fresh-start-server-sweden');
}

export default function SaintsotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-fresh-start-server-sweden" />;
}
