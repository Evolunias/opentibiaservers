import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-canada');
}

export default function BlazeraWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-canada" />;
}
