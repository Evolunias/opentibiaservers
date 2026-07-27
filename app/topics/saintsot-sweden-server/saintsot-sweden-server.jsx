import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-sweden-server');
}

export default function SaintsotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-sweden-server" />;
}
