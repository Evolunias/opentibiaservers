import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-discord-server-poland');
}

export default function MidhemWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-discord-server-poland" />;
}
