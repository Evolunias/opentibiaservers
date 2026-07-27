import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-ot-server');
}

export default function WithDiscordYurotsOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-ot-server" />;
}
