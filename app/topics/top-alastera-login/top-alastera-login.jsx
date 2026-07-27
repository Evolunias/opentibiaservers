import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-login');
}

export default function TopAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-login" />;
}
