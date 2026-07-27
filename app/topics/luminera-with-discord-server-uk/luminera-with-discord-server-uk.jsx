import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-uk');
}

export default function LumineraWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-uk" />;
}
