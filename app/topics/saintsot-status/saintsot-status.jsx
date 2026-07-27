import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-status');
}

export default function SaintsotStatusKeywordPage() {
  return <StaticKeywordPage slug="saintsot-status" />;
}
