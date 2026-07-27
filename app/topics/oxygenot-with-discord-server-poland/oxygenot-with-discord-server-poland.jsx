import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-discord-server-poland');
}

export default function OxygenotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-discord-server-poland" />;
}
