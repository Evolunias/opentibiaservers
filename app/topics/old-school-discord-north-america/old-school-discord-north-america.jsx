import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-north-america');
}

export default function OldSchoolDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-north-america" />;
}
