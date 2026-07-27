import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-latin-america');
}

export default function SabrehavenWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-latin-america" />;
}
