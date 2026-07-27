import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-discord-brazil');
}

export default function NoResetDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-discord-brazil" />;
}
