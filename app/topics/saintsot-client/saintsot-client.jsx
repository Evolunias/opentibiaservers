import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-client');
}

export default function SaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="saintsot-client" />;
}
