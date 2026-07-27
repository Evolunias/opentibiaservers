import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-with-discord-server');
}

export default function CalmeraOt100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-with-discord-server" />;
}
