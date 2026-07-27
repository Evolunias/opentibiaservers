import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-brazil');
}

export default function SabrehavenWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-brazil" />;
}
