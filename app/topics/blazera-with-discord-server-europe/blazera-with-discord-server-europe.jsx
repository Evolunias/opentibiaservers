import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-europe');
}

export default function BlazeraWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-europe" />;
}
