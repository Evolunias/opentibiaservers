import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-discord');
}

export default function WithDiscordLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-discord" />;
}
