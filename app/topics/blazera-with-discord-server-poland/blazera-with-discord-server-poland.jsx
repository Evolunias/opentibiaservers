import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-poland');
}

export default function BlazeraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-poland" />;
}
