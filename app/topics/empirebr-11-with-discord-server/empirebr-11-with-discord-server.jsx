import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-with-discord-server');
}

export default function Empirebr11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-with-discord-server" />;
}
