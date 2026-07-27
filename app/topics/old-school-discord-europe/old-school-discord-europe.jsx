import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-europe');
}

export default function OldSchoolDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-europe" />;
}
