import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-mexico');
}

export default function MediviaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-mexico" />;
}
