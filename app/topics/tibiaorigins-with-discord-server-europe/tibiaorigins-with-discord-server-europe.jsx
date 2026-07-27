import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-with-discord-server-europe');
}

export default function TibiaoriginsWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-with-discord-server-europe" />;
}
