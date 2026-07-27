import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot');
}

export default function LowrateCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot" />;
}
