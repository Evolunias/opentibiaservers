import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-noxiousot-tibia');
}

export default function OfficialNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-noxiousot-tibia" />;
}
