import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-ot');
}

export default function ActiveSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-ot" />;
}
