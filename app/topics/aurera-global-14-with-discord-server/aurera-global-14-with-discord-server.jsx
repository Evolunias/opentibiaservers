import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-with-discord-server');
}

export default function AureraGlobal14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-with-discord-server" />;
}
