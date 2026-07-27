import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-with-discord-server');
}

export default function Empirebr13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-with-discord-server" />;
}
