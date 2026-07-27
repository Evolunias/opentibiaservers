import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera');
}

export default function ActiveAlasteraKeywordPage() {
  return <StaticKeywordPage slug="active-alastera" />;
}
