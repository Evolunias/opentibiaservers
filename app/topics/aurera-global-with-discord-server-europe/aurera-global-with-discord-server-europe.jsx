import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-europe');
}

export default function AureraGlobalWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-europe" />;
}
