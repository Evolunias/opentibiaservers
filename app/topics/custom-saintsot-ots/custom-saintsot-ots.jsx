import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-ots');
}

export default function CustomSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-ots" />;
}
