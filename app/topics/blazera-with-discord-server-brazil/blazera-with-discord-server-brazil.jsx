import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-brazil');
}

export default function BlazeraWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-brazil" />;
}
