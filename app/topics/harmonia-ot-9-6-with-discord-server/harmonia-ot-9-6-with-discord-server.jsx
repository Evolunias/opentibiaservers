import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-with-discord-server');
}

export default function HarmoniaOt96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-with-discord-server" />;
}
