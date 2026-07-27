import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-uk');
}

export default function MediviaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-uk" />;
}
