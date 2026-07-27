import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-south-america');
}

export default function NoResetDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-south-america" />;
}
