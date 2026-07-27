import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-login');
}

export default function PopularAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-login" />;
}
