import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-france');
}

export default function OldSchoolDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-france" />;
}
