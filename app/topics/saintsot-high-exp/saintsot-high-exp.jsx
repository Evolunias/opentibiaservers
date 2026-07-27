import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-high-exp');
}

export default function SaintsotHighExpKeywordPage() {
  return <StaticKeywordPage slug="saintsot-high-exp" />;
}
