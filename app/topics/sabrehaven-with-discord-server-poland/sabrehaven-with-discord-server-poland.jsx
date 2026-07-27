import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-discord-server-poland');
}

export default function SabrehavenWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-discord-server-poland" />;
}
