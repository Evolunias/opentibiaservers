import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-tibia');
}

export default function NewSeasonTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-tibia" />;
}
