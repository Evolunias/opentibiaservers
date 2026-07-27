import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-germany');
}

export default function SabrehavenWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-germany" />;
}
