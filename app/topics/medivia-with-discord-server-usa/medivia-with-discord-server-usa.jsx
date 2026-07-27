import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-usa');
}

export default function MediviaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-usa" />;
}
