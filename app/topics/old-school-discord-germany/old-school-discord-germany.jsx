import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-germany');
}

export default function OldSchoolDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-germany" />;
}
