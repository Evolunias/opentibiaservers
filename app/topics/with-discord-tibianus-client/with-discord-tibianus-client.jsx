import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-client');
}

export default function WithDiscordTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-client" />;
}
