import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-europe');
}

export default function HarmoniaOtWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-europe" />;
}
