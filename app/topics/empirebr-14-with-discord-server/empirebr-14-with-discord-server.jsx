import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-with-discord-server');
}

export default function Empirebr14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-with-discord-server" />;
}
