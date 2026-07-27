import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-europe');
}

export default function SabrehavenWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-europe" />;
}
