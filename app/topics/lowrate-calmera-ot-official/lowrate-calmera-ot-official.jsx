import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-official');
}

export default function LowrateCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-official" />;
}
