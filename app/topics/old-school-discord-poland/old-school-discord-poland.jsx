import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-poland');
}

export default function OldSchoolDiscordPolandKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-poland" />;
}
