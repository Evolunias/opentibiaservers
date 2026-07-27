import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-argentina');
}

export default function OldSchoolDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-argentina" />;
}
