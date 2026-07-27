import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-ots');
}

export default function TopAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-ots" />;
}
