import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-tibia');
}

export default function NewTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-tibia" />;
}
