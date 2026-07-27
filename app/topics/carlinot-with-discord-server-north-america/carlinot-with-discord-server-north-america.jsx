import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-north-america');
}

export default function CarlinotWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-north-america" />;
}
