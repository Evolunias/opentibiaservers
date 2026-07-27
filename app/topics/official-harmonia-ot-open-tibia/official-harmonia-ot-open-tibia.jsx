import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-open-tibia');
}

export default function OfficialHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-open-tibia" />;
}
