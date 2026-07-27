import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-argentina-server');
}

export default function SaintsotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-argentina-server" />;
}
