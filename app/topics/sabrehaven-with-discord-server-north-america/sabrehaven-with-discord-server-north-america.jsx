import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-north-america');
}

export default function SabrehavenWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-north-america" />;
}
