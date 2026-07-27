import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-ot');
}

export default function FreshStartCarlinotOtKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-ot" />;
}
