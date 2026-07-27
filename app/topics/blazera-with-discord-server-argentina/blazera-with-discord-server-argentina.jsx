import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-discord-server-argentina');
}

export default function BlazeraWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-discord-server-argentina" />;
}
