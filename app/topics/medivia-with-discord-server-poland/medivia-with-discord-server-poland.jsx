import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-poland');
}

export default function MediviaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-poland" />;
}
