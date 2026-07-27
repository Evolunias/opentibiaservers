import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-germany-servers');
}

export default function SaintsotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-germany-servers" />;
}
