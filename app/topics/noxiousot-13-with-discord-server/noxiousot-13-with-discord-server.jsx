import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-with-discord-server');
}

export default function Noxiousot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-with-discord-server" />;
}
