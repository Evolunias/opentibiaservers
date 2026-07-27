import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-discord-server-france');
}

export default function TibianusWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-discord-server-france" />;
}
