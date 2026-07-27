import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-open-tibia');
}

export default function FreshStartTibiaretroOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-open-tibia" />;
}
