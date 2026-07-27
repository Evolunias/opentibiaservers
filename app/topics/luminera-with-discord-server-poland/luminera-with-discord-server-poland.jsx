import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-poland');
}

export default function LumineraWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-poland" />;
}
