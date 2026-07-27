import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-login');
}

export default function CurrentAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-login" />;
}
