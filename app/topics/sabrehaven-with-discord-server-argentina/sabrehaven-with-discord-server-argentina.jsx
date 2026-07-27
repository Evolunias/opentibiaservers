import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-argentina');
}

export default function SabrehavenWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-argentina" />;
}
