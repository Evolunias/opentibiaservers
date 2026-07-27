import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-ot-server');
}

export default function WithDiscordTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-ot-server" />;
}
