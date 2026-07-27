import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-official');
}

export default function ActiveTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-official" />;
}
