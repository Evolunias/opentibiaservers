import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-ot');
}

export default function TopSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-ot" />;
}
