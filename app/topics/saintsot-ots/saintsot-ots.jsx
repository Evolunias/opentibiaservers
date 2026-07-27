import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-ots');
}

export default function SaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="saintsot-ots" />;
}
