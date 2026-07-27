import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-client');
}

export default function WithDiscordLumineraClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-client" />;
}
