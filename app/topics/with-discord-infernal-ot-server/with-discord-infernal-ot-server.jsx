import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-server');
}

export default function WithDiscordInfernalOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-server" />;
}
