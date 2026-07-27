import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-ots');
}

export default function FreshStartAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-ots" />;
}
