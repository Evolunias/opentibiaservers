import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-ot');
}

export default function FreshStartThaisotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-ot" />;
}
