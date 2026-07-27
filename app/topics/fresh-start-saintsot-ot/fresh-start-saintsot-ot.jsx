import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-ot');
}

export default function FreshStartSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-ot" />;
}
