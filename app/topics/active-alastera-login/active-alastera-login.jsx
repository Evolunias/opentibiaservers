import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-login');
}

export default function ActiveAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-login" />;
}
