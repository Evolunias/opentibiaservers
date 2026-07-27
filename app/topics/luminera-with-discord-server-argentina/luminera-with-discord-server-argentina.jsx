import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-argentina');
}

export default function LumineraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-argentina" />;
}
