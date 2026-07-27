import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-usa');
}

export default function AureraGlobalWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-usa" />;
}
