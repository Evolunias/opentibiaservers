import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-register');
}

export default function NewSeasonTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-register" />;
}
