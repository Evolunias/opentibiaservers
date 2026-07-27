import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-10-0-with-discord-server');
}

export default function AureraGlobal100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-10-0-with-discord-server" />;
}
