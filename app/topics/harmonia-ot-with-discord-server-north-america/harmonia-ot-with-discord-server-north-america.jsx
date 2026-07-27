import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-north-america');
}

export default function HarmoniaOtWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-north-america" />;
}
