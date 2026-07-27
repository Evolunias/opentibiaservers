import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-ot-server');
}

export default function WithDiscordKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-ot-server" />;
}
