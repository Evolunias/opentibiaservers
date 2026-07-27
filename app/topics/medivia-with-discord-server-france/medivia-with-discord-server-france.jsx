import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-france');
}

export default function MediviaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-france" />;
}
