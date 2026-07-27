import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-low-exp-server-sweden');
}

export default function SaintsotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-low-exp-server-sweden" />;
}
