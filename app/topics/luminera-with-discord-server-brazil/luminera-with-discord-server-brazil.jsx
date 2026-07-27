import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-brazil');
}

export default function LumineraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-brazil" />;
}
