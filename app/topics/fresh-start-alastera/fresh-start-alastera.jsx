import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera');
}

export default function FreshStartAlasteraKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera" />;
}
