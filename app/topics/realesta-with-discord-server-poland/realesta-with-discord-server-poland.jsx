import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-discord-server-poland');
}

export default function RealestaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-discord-server-poland" />;
}
