import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-europe');
}

export default function MediviaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-europe" />;
}
