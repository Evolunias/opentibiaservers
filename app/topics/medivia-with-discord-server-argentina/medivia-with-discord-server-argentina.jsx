import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-argentina');
}

export default function MediviaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-argentina" />;
}
