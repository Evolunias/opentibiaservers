import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-argentina');
}

export default function AureraGlobalWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-argentina" />;
}
