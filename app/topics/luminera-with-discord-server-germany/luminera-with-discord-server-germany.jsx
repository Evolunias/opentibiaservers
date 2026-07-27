import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-discord-server-germany');
}

export default function LumineraWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-discord-server-germany" />;
}
