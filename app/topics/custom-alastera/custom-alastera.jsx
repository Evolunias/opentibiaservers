import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera');
}

export default function CustomAlasteraKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera" />;
}
