import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-brazil');
}

export default function WithDiscordStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-brazil" />;
}
