import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-poland-servers');
}

export default function SaintsotPolandServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-poland-servers" />;
}
