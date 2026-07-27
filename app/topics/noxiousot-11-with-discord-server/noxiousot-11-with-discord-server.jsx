import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-with-discord-server');
}

export default function Noxiousot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-with-discord-server" />;
}
