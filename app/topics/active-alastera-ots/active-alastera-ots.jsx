import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-ots');
}

export default function ActiveAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-ots" />;
}
