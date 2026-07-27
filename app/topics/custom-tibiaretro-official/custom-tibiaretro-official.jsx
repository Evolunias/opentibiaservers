import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-official');
}

export default function CustomTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-official" />;
}
