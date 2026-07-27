import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-germany-server');
}

export default function SaintsotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-germany-server" />;
}
