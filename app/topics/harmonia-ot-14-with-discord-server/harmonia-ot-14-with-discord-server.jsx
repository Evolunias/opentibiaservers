import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-with-discord-server');
}

export default function HarmoniaOt14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-with-discord-server" />;
}
