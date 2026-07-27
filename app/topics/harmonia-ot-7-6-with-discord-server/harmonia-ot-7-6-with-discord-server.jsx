import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-6-with-discord-server');
}

export default function HarmoniaOt76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-6-with-discord-server" />;
}
