import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-north-america');
}

export default function BlazeraWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-north-america" />;
}
