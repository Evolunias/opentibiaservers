import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-canada');
}

export default function SabrehavenWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-canada" />;
}
