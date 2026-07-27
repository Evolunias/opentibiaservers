import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-ot');
}

export default function FreshStartAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-ot" />;
}
