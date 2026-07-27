import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-tibia');
}

export default function OfficialHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-tibia" />;
}
