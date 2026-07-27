import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-ots');
}

export default function LowrateCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-ots" />;
}
