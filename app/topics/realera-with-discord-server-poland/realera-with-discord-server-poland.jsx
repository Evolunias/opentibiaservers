import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-discord-server-poland');
}

export default function RealeraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="realera-with-discord-server-poland" />;
}
