import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-tibia');
}

export default function TibiaretroTibiaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-tibia" />;
}
