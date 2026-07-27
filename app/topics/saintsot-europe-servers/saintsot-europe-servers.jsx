import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-europe-servers');
}

export default function SaintsotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-europe-servers" />;
}
