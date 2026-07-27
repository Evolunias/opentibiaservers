import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-germany');
}

export default function AureraGlobalWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-germany" />;
}
