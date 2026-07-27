import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-discord-server-france');
}

export default function OlderaWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-discord-server-france" />;
}
