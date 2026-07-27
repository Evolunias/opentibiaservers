import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-france');
}

export default function BlazeraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-france" />;
}
