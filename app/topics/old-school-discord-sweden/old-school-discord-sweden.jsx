import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-discord-sweden');
}

export default function OldSchoolDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="old-school-discord-sweden" />;
}
