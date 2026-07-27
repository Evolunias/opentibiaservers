import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-ot-server');
}

export default function WithDiscordArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-ot-server" />;
}
