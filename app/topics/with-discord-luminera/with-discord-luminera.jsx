import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera');
}

export default function WithDiscordLumineraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera" />;
}
