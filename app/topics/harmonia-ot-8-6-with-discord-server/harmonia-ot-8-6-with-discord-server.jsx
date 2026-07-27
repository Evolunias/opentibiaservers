import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-6-with-discord-server');
}

export default function HarmoniaOt86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-6-with-discord-server" />;
}
