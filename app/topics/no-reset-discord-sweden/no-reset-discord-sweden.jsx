import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-sweden');
}

export default function NoResetDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-sweden" />;
}
