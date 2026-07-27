import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nilot-discord');
}

export default function OldSchoolNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="old-school-nilot-discord" />;
}
