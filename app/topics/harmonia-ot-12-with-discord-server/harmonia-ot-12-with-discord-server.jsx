import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-with-discord-server');
}

export default function HarmoniaOt12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-with-discord-server" />;
}
