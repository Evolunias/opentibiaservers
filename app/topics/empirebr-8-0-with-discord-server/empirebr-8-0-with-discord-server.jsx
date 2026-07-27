import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-with-discord-server');
}

export default function Empirebr80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-with-discord-server" />;
}
