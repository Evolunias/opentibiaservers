import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-uk');
}

export default function OldSchoolDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-uk" />;
}
