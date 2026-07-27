import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-12-with-discord-server');
}

export default function Noxiousot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-12-with-discord-server" />;
}
