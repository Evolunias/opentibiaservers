import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-with-discord-server');
}

export default function Empirebr74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-with-discord-server" />;
}
