import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-usa');
}

export default function LumineraWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-usa" />;
}
