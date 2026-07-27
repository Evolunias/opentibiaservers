import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-with-discord-server');
}

export default function AureraGlobal86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-with-discord-server" />;
}
