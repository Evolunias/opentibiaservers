import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-ots');
}

export default function CustomAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-ots" />;
}
