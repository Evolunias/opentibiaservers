import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-guide');
}

export default function OfficialHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-guide" />;
}
