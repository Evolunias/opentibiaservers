import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-client');
}

export default function WithDiscordTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-client" />;
}
