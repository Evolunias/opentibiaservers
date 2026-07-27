import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-tibia');
}

export default function NewSeasonNoxiousotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-tibia" />;
}
