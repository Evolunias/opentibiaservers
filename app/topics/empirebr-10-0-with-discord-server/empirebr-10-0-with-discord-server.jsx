import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-with-discord-server');
}

export default function Empirebr100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-with-discord-server" />;
}
