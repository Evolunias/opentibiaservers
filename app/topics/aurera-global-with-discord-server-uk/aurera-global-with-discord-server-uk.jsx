import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-uk');
}

export default function AureraGlobalWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-uk" />;
}
