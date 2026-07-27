import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera');
}

export default function PopularAlasteraKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera" />;
}
