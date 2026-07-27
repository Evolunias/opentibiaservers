import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-login');
}

export default function BestAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-login" />;
}
