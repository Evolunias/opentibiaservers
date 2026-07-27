import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera');
}

export default function TopAlasteraKeywordPage() {
  return <StaticKeywordPage slug="top-alastera" />;
}
