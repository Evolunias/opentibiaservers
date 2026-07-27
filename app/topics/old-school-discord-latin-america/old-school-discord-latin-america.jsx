import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-latin-america');
}

export default function OldSchoolDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-latin-america" />;
}
