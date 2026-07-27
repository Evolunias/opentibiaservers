import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-tibiaretro-discord');
}

export default function OldSchoolTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-tibiaretro-discord" />;
}
