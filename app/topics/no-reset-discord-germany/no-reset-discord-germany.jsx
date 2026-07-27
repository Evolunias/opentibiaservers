import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-germany');
}

export default function NoResetDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-germany" />;
}
