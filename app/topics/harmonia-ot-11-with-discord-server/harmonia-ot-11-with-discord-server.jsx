import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-with-discord-server');
}

export default function HarmoniaOt11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-with-discord-server" />;
}
