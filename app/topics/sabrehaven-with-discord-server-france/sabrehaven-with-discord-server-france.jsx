import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-france');
}

export default function SabrehavenWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-france" />;
}
