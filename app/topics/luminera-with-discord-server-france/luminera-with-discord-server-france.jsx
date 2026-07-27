import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-france');
}

export default function LumineraWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-france" />;
}
