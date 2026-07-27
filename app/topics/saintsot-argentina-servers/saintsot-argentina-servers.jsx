import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-argentina-servers');
}

export default function SaintsotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-argentina-servers" />;
}
