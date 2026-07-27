import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-server');
}

export default function WithDiscordTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-server" />;
}
