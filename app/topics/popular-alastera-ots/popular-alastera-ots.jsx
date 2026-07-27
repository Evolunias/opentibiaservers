import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-ots');
}

export default function PopularAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-ots" />;
}
