import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-with-discord-server');
}

export default function Empirebr15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-with-discord-server" />;
}
