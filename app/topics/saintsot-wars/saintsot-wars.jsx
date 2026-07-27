import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-wars');
}

export default function SaintsotWarsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-wars" />;
}
