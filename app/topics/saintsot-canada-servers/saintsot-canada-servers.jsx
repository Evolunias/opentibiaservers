import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-canada-servers');
}

export default function SaintsotCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-canada-servers" />;
}
