import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-discord-server-europe');
}

export default function OxygenotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-discord-server-europe" />;
}
