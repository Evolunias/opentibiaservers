import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-tibia');
}

export default function FreshStartTibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-tibia" />;
}
