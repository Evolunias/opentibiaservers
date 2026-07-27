import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-with-discord-server');
}

export default function Noxiousot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-with-discord-server" />;
}
