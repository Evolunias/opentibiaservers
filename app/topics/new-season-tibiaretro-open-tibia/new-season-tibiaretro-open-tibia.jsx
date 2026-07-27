import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-open-tibia');
}

export default function NewSeasonTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-open-tibia" />;
}
