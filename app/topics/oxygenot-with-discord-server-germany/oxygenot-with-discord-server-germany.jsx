import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-discord-server-germany');
}

export default function OxygenotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-discord-server-germany" />;
}
