import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-chile');
}

export default function OldSchoolDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-chile" />;
}
