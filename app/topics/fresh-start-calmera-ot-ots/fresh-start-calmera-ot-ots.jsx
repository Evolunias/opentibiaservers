import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-ots');
}

export default function FreshStartCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-ots" />;
}
