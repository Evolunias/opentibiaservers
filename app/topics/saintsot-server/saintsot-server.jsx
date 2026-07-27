import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-server');
}

export default function SaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-server" />;
}
