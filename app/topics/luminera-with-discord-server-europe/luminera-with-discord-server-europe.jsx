import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-europe');
}

export default function LumineraWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-europe" />;
}
