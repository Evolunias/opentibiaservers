import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-ot-server');
}

export default function WithDiscordClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-ot-server" />;
}
