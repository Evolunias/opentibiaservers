import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-open-tibia');
}

export default function NewTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-open-tibia" />;
}
