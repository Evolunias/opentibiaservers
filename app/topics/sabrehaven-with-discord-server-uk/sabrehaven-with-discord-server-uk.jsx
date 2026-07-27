import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-uk');
}

export default function SabrehavenWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-uk" />;
}
