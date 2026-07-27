import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-with-discord-server-poland');
}

export default function NostaltherWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-with-discord-server-poland" />;
}
