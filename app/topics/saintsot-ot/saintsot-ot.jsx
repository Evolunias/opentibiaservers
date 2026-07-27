import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-ot');
}

export default function SaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="saintsot-ot" />;
}
