import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-with-discord-server');
}

export default function HarmoniaOt15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-with-discord-server" />;
}
