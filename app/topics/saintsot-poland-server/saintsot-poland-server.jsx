import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-poland-server');
}

export default function SaintsotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-poland-server" />;
}
