import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-1-with-discord-server');
}

export default function CalmeraOt71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-1-with-discord-server" />;
}
