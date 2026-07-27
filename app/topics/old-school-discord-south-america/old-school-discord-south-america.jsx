import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-south-america');
}

export default function OldSchoolDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-south-america" />;
}
