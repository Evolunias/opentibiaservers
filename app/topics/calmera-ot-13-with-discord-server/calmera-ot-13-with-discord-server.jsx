import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-with-discord-server');
}

export default function CalmeraOt13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-with-discord-server" />;
}
