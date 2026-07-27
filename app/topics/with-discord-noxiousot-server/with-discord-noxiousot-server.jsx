import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-server');
}

export default function WithDiscordNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-server" />;
}
