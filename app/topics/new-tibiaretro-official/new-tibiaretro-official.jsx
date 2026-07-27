import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-official');
}

export default function NewTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-official" />;
}
