import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-with-discord-server');
}

export default function HarmoniaOt13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-with-discord-server" />;
}
