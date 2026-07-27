import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-14-with-discord-server');
}

export default function Noxiousot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-14-with-discord-server" />;
}
