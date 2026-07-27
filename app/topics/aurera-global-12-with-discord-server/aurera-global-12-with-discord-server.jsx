import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-12-with-discord-server');
}

export default function AureraGlobal12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-12-with-discord-server" />;
}
