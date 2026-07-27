import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-france');
}

export default function MidhemWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-france" />;
}
