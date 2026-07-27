import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-ots');
}

export default function CurrentCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-ots" />;
}
