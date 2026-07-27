import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-with-discord-server');
}

export default function AureraGlobal11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-with-discord-server" />;
}
