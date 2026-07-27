import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-mexico');
}

export default function BlazeraWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-mexico" />;
}
