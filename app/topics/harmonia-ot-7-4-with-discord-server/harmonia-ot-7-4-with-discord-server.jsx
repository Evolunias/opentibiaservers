import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-with-discord-server');
}

export default function HarmoniaOt74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-with-discord-server" />;
}
