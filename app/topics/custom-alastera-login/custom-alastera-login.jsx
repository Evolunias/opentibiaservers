import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-login');
}

export default function CustomAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-login" />;
}
