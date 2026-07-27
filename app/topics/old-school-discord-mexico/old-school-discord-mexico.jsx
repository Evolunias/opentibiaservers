import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-mexico');
}

export default function OldSchoolDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-mexico" />;
}
