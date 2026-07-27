import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-with-discord-server');
}

export default function Empirebr71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-with-discord-server" />;
}
