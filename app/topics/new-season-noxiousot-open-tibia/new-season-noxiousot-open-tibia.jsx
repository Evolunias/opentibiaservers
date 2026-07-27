import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-open-tibia');
}

export default function NewSeasonNoxiousotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-open-tibia" />;
}
