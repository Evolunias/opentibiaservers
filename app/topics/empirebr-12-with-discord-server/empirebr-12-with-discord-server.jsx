import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-with-discord-server');
}

export default function Empirebr12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-with-discord-server" />;
}
