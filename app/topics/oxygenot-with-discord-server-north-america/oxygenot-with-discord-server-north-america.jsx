import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-with-discord-server-north-america');
}

export default function OxygenotWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-with-discord-server-north-america" />;
}
