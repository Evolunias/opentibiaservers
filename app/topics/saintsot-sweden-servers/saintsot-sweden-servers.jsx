import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-sweden-servers');
}

export default function SaintsotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-sweden-servers" />;
}
