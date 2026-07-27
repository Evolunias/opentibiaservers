import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-usa');
}

export default function BlazeraWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-usa" />;
}
