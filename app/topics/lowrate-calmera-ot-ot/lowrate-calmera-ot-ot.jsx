import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-ot');
}

export default function LowrateCalmeraOtOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-ot" />;
}
