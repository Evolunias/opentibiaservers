import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-ot');
}

export default function CustomSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-ot" />;
}
