import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-ot');
}

export default function CurrentCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-ot" />;
}
