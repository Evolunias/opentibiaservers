import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp-server-sweden');
}

export default function SaintsotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp-server-sweden" />;
}
