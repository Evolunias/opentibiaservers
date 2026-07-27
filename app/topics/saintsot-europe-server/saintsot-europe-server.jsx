import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-europe-server');
}

export default function SaintsotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-europe-server" />;
}
