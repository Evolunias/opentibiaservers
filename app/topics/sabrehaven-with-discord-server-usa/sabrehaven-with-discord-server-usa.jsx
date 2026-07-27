import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-usa');
}

export default function SabrehavenWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-usa" />;
}
