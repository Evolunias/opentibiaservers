import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-canada-server');
}

export default function SaintsotCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-canada-server" />;
}
