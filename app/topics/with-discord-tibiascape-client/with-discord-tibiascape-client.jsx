import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-client');
}

export default function WithDiscordTibiascapeClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-client" />;
}
