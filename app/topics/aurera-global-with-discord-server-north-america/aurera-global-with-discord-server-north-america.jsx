import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-discord-server-north-america');
}

export default function AureraGlobalWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-discord-server-north-america" />;
}
