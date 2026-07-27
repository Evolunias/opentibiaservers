import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot');
}

export default function CurrentCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot" />;
}
